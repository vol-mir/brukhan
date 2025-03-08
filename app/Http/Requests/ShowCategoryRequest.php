<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Data\CategoryData;
use Illuminate\Foundation\Http\FormRequest;

class ShowCategoryRequest extends FormRequest
{
    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'slug' => [
                'required',
                'string',
                'exists:categories,slug',
            ],
        ];
    }

    protected function prepareForValidation(): void
    {
        parent::prepareForValidation();

        $this->merge([
            'slug' => $this->route('slug'),
        ]);
    }

    public function toData(): CategoryData
    {
        return CategoryData::from($this->validated());
    }
}
