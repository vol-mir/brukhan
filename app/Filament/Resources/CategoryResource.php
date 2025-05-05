<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?int $navigationSort = 3;

    public static function getNavigationGroup(): string
    {
        return __('navigation.company');
    }

    public static function getPluralModelLabel(): string
    {
        return __('models.categories');
    }

    public static function getModelLabel(): string
    {
        return __('models.category');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Grid::make()
                            ->schema([
                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->maxLength(255)
                                    ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set): mixed => in_array($operation, ['create', 'edit']) ? $set('slug', Str::slug($state)) : null)
                                    ->label(__('fields.name')),
                                Forms\Components\TextInput::make('slug')
                                    ->dehydrated()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(Category::class, 'slug', ignoreRecord: true)
                                    ->label(__('fields.slug')),
                                Forms\Components\TextInput::make('order')
                                    ->integer()
                                    ->minValue(1)
                                    ->default(1)
                                    ->label(__('fields.order')),
                            ]),

                        Forms\Components\Select::make('parent_id')
                            ->label(__('fields.parent'))
                            ->relationship('parent', 'name', ignoreRecord: true)
                            ->searchable()
                            ->preload()
                            ->placeholder(__('fields.parent')),

                        Forms\Components\Toggle::make('is_visible')
                            ->label(__('fields.is_visible'))
                            ->default(true),

                        Forms\Components\Toggle::make('is_popular')
                            ->label(__('fields.is_popular')),

                        Forms\Components\RichEditor::make('description')
                            ->columnSpan('full')
                            ->fileAttachmentsDisk('public')
                            ->fileAttachmentsDirectory('images/categories/descriptions')
                            ->label(__('fields.description')),
                    ])
                    ->columnSpan(['lg' => 3]),

                Forms\Components\Section::make(__('fields.image'))
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->image()
                            ->imageEditor()
                            ->disk('public')
                            ->directory('images/categories')
                            ->columnSpan('full')
                            ->getUploadedFileNameForStorageUsing(fn(TemporaryUploadedFile $file): Stringable => str(Str::uuid() . '.' . $file->extension()))
                            ->label(__('fields.image')),
                    ])
                    ->collapsible(),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('fields.name'))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('parent.name')
                    ->label(__('fields.parent'))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_visible')
                    ->boolean()
                    ->label(__('fields.is_visible')),
                Tables\Columns\IconColumn::make('is_popular')
                    ->boolean()
                    ->label(__('fields.is_popular')),
                Tables\Columns\TextColumn::make('order')
                    ->label(__('fields.order'))
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->after(function (Category $category): void {
                        if ($category->image) {
                            Storage::disk('public')->delete($category->image);
                        }
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->after(function (Collection $records): void {
                            /** @var Category $category */
                            foreach ($records as $category) {
                                if ($category->image) {
                                    Storage::disk('public')->delete($category->image);
                                }
                            }
                        })
                ]),
            ])
            ->emptyStateHeading(__('models.empty_items'));
    }

    public static function getRelations(): array
    {
        return [
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'slug'];
    }
}
