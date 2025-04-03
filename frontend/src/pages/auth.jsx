import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../utils/button'

const Auth = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSignedIn) {
            navigate('/dashboard')
        }
    }, [isSignedIn, navigate])

    return (
        <div className='sign-in-container'>
            <main className="flex min-h-screen w-full bg-white">
            <div className="w-full max-w-sm mx-auto flex flex-col justify-center px-6">
                <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
                <p className="text-gray-500 mt-2">
                    Please choose an option to continue
                </p>
                </div>
                <div className="space-y-4">

                    <SignedOut>
                        <Button><SignInButton mode='modal' forceRedirectUrl='/dashboard' /></Button>
                        <Button variant='secondary'><SignUpButton mode='modal' forceRedirectUrl='/dashboard' /></Button>
                    </SignedOut>
                </div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            </main>
        </div>
    )
}

export default Auth