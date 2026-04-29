<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProductFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'sort' => ['nullable', 'in:price-asc,price-desc,name-asc,name-desc'],
            'available' => ['nullable', 'boolean'],
            'brands' => ['nullable', 'array'],
            'brands.*' => ['string'],
        ];
    }

    public function filters(): array {
        return [
            'sort'      => $this->validated('sort'),
            'available' => $this->boolean('available'),
            'brands'    => $this->validated('brands') ?? [],
        ];
    }
}
