<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\BlogPostResource\Pages;
use App\Models\BlogPost;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static ?string $recordTitleAttribute = 'title';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?int $navigationSort = 0;

    public static function getNavigationGroup(): string
    {
        return __('navigation.blog');
    }

    public static function getPluralModelLabel(): string
    {
        return __('models.blog_posts');
    }

    public static function getModelLabel(): string
    {
        return __('models.blog_post');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->live(onBlur: true)
                            ->maxLength(255)
                            ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set): mixed => $operation === 'create' ? $set('slug', Str::slug($state)) : null)
                            ->label(__('fields.title')),
                        Forms\Components\TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->maxLength(255)
                            ->unique(BlogPost::class, 'slug', ignoreRecord: true)
                            ->label(__('fields.slug')),
                        Forms\Components\RichEditor::make('content')
                            ->required()
                            ->columnSpan('full')
                            ->fileAttachmentsDisk('public')
                            ->fileAttachmentsDirectory('images/blog-posts/contents')
                            ->label(__('fields.content')),
                        Forms\Components\DatePicker::make('published_at')
                            ->label(__('fields.published_at')),
                    ])
                    ->columns(),

                Forms\Components\Section::make(__('fields.image'))
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->imageEditor()
                            ->disk('public')
                            ->directory('images/blog-posts')
                            ->columnSpan('full')
                            ->getUploadedFileNameForStorageUsing(fn(TemporaryUploadedFile $file): Stringable => str(Str::uuid() . '.' . $file->extension()))
                            ->label(__('fields.image')),
                    ])
                    ->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label(__('fields.image')),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->label(__('fields.title')),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->label(__('fields.slug')),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->getStateUsing(fn(BlogPost $record): string => $record->published_at?->isPast() ? __('site.published') : __('site.draft'))
                    ->colors([
                        'success' => __('site.published'),
                    ])
                    ->label(__('fields.status')),
                Tables\Columns\TextColumn::make('published_at')
                    ->date()
                    ->label(__('fields.published_at')),
            ])
            ->filters([
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->after(function (BlogPost $blogPost): void {
                        if ($blogPost->image) {
                            Storage::disk('public')->delete($blogPost->image);
                        }
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->after(function (Collection $records): void {
                            /** @var BlogPost $blogPost */
                            foreach ($records as $blogPost) {
                                if ($blogPost->image) {
                                    Storage::disk('public')->delete($blogPost->image);
                                }
                            }
                        }),
                ]),
            ]);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Components\Section::make()
                    ->schema([
                        Components\Split::make([
                            Components\Grid::make()
                                ->schema([
                                    Components\Group::make([
                                        Components\TextEntry::make('title')
                                            ->label(__('fields.title')),
                                        Components\TextEntry::make('slug')
                                            ->label(__('fields.slug')),
                                        Components\TextEntry::make('published_at')
                                            ->badge()
                                            ->date()
                                            ->color('success')
                                            ->label(__('fields.published_at')),
                                    ]),
                                ]),
                            Components\ImageEntry::make('image')
                                ->hiddenLabel()
                                ->grow(false)
                                ->label(__('fields.image')),
                        ])->from('lg'),
                    ]),
                Components\Section::make(__('fields.content'))
                    ->schema([
                        Components\TextEntry::make('content')
                            ->prose()
                            ->markdown()
                            ->hiddenLabel()
                            ->label(__('fields.content')),
                    ])
                    ->collapsible(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogPosts::route('/'),
            'create' => Pages\CreateBlogPost::route('/create'),
            'edit' => Pages\EditBlogPost::route('/{record}/edit'),
            'view' => Pages\ViewBlogPost::route('/{record}'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['title', 'slug'];
    }
}
