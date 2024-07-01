import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const RegisterCompany = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-blue-900 text-white rounded-lg shadow-lg">
      <form>
        <div className="space-y-12">
          <div className="border-b border-blue-700 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-yellow-400">Company Registration</h2>
            <p className="mt-1 text-sm leading-6 text-blue-300">
              Register your company with InpirezHR to start hiring the best talent.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="company-name" className="block text-sm font-medium leading-6">
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about-company" className="block text-sm font-medium leading-6">
                  About Company
                </label>
                <div className="mt-2">
                  <textarea
                    id="about-company"
                    name="about-company"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Write a few sentences about your company."
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-blue-300">This information will be displayed publicly.</p>
              </div>

              <div className="col-span-full">
                <label htmlFor="logo" className="block text-sm font-medium leading-6">
                  Company Logo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon className="h-12 w-12 text-blue-500" aria-hidden="true" />
                  <button
                    type="button"
                    className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
                  Company Cover Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-blue-700 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-blue-500" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-blue-300">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-blue-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 focus-within:ring-offset-blue-900 hover:text-yellow-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-blue-300">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-blue-700 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-yellow-400">Point of Contact</h2>
            <p className="mt-1 text-sm leading-6 text-blue-300">Please provide the contact details of the person responsible for hiring.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="contact-name" className="block text-sm font-medium leading-6">
                  Contact Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="contact-email" className="block text-sm font-medium leading-6">
                  Contact Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="contact-email"
                    id="contact-email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="jane.doe@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contact-phone" className="block text-sm font-medium leading-6">
                  Contact Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="contact-phone"
                    id="contact-phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="contact-address" className="block text-sm font-medium leading-6">
                  Contact Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact-address"
                    id="contact-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 bg-blue-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-blue-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="1234 Elm St, Anytown, USA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-white hover:text-yellow-400">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterCompany;
