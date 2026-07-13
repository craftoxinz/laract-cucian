<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Throwable;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     *
     * @throws ValidationException
     * @throws Throwable
     */
    public function create(array $input): User
    {
        $this->validateRegistration($input);

        return DB::transaction(function () use ($input) {
            $user = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]);

            $user->customer()->create([
                'name' => $user->name,
                'gender' => $input['gender'],
                'phone_number' => $input['phone_number'],
            ]);

            return $user;
        });
    }

    /**
     * @param  array<string, string>  $input
     *
     * @throws ValidationException
     */
    private function validateRegistration(array $input): void
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'gender' => [
                'required',
                'string',
                'max:255',
                Rule::in(['male', 'female']),
            ],
            'phone_number' => [
                'required',
                'string',
                'regex:/^(08|\+628)\d+$/',
                'min:12',
                'max:14',
            ],
            'password' => $this->passwordRules(),
        ])->validate();
    }
}
