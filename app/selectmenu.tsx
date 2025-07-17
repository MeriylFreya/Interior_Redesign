import { Fragment } from "react";
import { classNames } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type SelectMenuProps = {
  label: string;
  options: string[];
  selected: string;
  onChange(value: string): void;
};

export function SelectMenu({
  label,
  options,
  selected,
  onChange,
}: SelectMenuProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <div className="w-80">
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-700">
            {label}
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white">
              <span className="block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white sm:text-sm">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={`${option}_${index}`}
                    value={option}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-pink-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-pink-600",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
