<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1;

use App\Data\GetProductData;
use Illuminate\Foundation\Http\FormRequest;

class GetProductRequest extends FormRequest
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
                'exists:products,slug',
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

    public function toData(): GetProductData
    {
        return GetProductData::from($this->validated());
    }
}
