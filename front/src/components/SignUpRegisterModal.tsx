/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { SignIn } from "./SignIn";
import { Register } from "./Register";
import { useReactiveVar } from "@apollo/client";
import { registerSignInVar, signInModalOpenVar } from "../graphql/state";
import { RegisterSignInType } from "../Types";

export default function SignUpRegisterModal() {
  const cancelButtonRef = useRef(null);

  const registerSignIn = useReactiveVar(registerSignInVar);
  const signInModalOpen = useReactiveVar(signInModalOpenVar);

  return (
    <Transition.Root show={signInModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => signInModalOpenVar(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="flex justify-end m-2 mr-4">
                  <button onClick={() => signInModalOpenVar(false)}><XIcon className="w-6 h-6" /></button>
                </div>
                <div className="bg-white px-4  pb-4 sm:p-4 sm:pb-4">
                  <div className="justify-center ">
                    <div className="mt-3  sm:mt-0 sm:ml-4">
                      <Dialog.Title
                        as="h3"
                        className="font-sans text-2xl text-center leading-6 font-medium text-gray-900"
                      >
                        {registerSignIn == RegisterSignInType.REGISTER
                          ? "Register"
                          : "Sign In"}
                      </Dialog.Title>
                      <div className="mt-2">
                        {registerSignIn === RegisterSignInType.REGISTER ? (
                          <Register />
                        ) : (
                          <SignIn />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
