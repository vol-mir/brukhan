<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1;

use App\Data\GetProductsData;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GetProductsRequest extends FormRequest
{
    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'category' => [
                'required',
                'string',
                'exists:categories,slug',
            ],
            'order' => [
                'nullable',
                'array'
            ],
            'order.*' => [
                'string',
                Rule::in(['asc', 'desc'])
            ],
            'page' => [
                'required',
                'integer',
                'min:1',
            ],
            'min_price' => [
                'nullable',
                'numeric',
            ],
            'max_price' => [
                'nullable',
                'numeric',
            ],
            'tags' => [
                'nullable',
                'array'
            ],
        ];
    }

    protected function prepareForValidation(): void
    {
        parent::prepareForValidation();

        $this->merge([
            'page' => $this->query->getInt('page', 1),
            'tags' => is_string($this->input('tags'))
                ? explode(',', $this->input('tags'))
                : $this->input('tags'),
        ]);
    }

    public function toData(): GetProductsData
    {
        return GetProductsData::from($this->validated());
    }
}
