import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, LockKeyhole } from 'lucide-react';
import logo from '../assets/RennyLogo.png';
import { LazyImage } from '../components/ui/LazyImage';
import { clearAdminSession, getAdminInfo } from '../utils/auth';

const ChangePassword = () => {
    const navigate = useNavigate();
    const adminInfo = getAdminInfo();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4 font-helvetica">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6">
                        <LazyImage
                            src={logo}
                            alt="Renny Logo"
                            wrapperClassName="w-48 h-24"
                            className="h-full w-full object-contain"
                            placeholderClassName="rounded-2xl animate-pulse"
                            fallbackSrc={logo}
                        />
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        Action Required
                    </div>

                    <h2 className="mt-4 text-3xl font-bold text-gray-900 tracking-tight">Password Update Required</h2>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                        {adminInfo?.email || 'This account'} must change its password before continuing to the CMS.
                    </p>

                    <div className="mt-6 w-full rounded-2xl border border-amber-100 bg-amber-50/70 p-5 text-left">
                        <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-white p-2 text-amber-600 shadow-sm">
                                <LockKeyhole className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Frontend route prepared</p>
                                <p className="mt-1 text-sm text-gray-600">
                                    This route is now ready for the backend password-change form flow whenever that endpoint is finalized.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex w-full flex-col gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                clearAdminSession();
                                navigate('/login', { replace: true });
                            }}
                            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:from-indigo-700 hover:to-blue-600"
                        >
                            Return To Login
                        </button>

                        <Link
                            to="/admin"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back To CMS
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
