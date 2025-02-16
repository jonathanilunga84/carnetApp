<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Validator;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function loginApi(Request $request)
    {
        //return response()->json(['status' => 'success', 'donnees' => $request->all()]);
        //'username' => 'required|unique:users',
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);
        //return response()->json(['status' => 'success', 'donnees' => $request->password]);
        if ($validator->fails()) {
            return $validator->errors();
        }
        try {
            $pseudo = $request->email; //.'@gmail.com';
            $user = User::where('pseudo', $pseudo)->where('statut', '1')->first(); //with("userTaxateur")->
            //return $user;

            if ($user == null) {
                return response()->json(['status' => 'Echec', 'message' => "Username ou mot de passe un incorrect"]);
            }

            if (Hash::check($request->password, $user->password)) {
                return response()->json([
                    'statut' => 'success',
                    'data' => $user,
                    "token" => $user->createToken('API Token')->plainTextToken
                ]);
            } else {
                return response()->json(['statut' => 'Echec', 'message' => 'Pseudo ou mot de passe un incorrect']);
            }
        } catch (\Exception $e) {
            $bug = $e->getMessage();
            return response()->json(['status' => $bug]);
        }
    }
}
