import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

const RegisterCandidate = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <form>
        <div className="space-y-8">
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-3xl font-bold leading-7 text-center text-indigo-400">Candidate Registration</h2>
            <p className="mt-1 text-md leading-6 text-center text-gray-400">
              Join InpirezHR to find the best job opportunities tailored for you.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-400">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-400">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-400">
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-400">
                  Upload Resume
                </label>
                <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-700 px-6 py-8">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-10 w-10 text-gray-500" aria-hidden="true" />
                    <div className="mt-2 flex text-sm text-gray-400">
                      <label
                        htmlFor="resume-upload"
                        className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="resume-upload" name="resume-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-400">
                  Street Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="1234 Main St"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-400">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Anytown"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-400">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="State/Province"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-400">
                  ZIP / Postal Code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-3xl font-bold leading-7 text-center text-indigo-400">Job Preferences</h2>
            <p className="mt-1 text-md leading-6 text-center text-gray-400">Let us know your job preferences.</p>

            <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="job-type" className="block text-sm font-medium text-gray-400">
                  Job Type
                </label>
                <div className="mt-1">
                  <select
                    id="job-type"
                    name="job-type"
                    autoComplete="job-type"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Temporary</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="job-location" className="block text-sm font-medium text-gray-400">
                  Preferred Job Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="job-location"
                    id="job-location"
                    autoComplete="job-location"
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="about" className="block text-sm font-medium text-gray-400">
                  About You
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Write a few sentences about yourself."
                  />
                </div>
                <p className="mt-3 text-sm text-gray-400">This information will be displayed to potential employers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4">
          <button type="button" className="text-sm font-semibold text-white hover:text-indigo-400">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterCandidate;
