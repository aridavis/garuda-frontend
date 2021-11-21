import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Question({ a, b, c, d, question, onChoose, idx }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex justify-between m-10">
      <div className="w-5">{idx}.</div>
      <div className="flex-1">
        <p>{question}</p>
        <RadioGroup
          value={selected}
          onChange={(e) => {
            setSelected(e);
            onChoose(e);
          }}
        >
          <RadioGroup.Option
            value={"a"}
            className={({ checked }) =>
              classNames(
                "rounded-tl-md rounded-tr-md",
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <div className="flex items-center text-sm">
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <RadioGroup.Label
                  as="span"
                  className="ml-3 font-medium text-gray-900"
                >
                  {a}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>

          <RadioGroup.Option
            value={"b"}
            className={({ checked }) =>
              classNames(
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <div className="flex items-center text-sm">
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <RadioGroup.Label
                  as="span"
                  className="ml-3 font-medium text-gray-900"
                >
                  {b}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>

          <RadioGroup.Option
            value={"c"}
            className={({ checked }) =>
              classNames(
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <div className="flex items-center text-sm">
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <RadioGroup.Label
                  as="span"
                  className="ml-3 font-medium text-gray-900"
                >
                  {c}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>

          <RadioGroup.Option
            value={"d"}
            className={({ checked }) =>
              classNames(
                "rounded-bl-md rounded-br-md",
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <div className="flex items-center text-sm">
                <span
                  className={classNames(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "h-4 w-4 rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <RadioGroup.Label
                  as="span"
                  className="ml-3 font-medium text-gray-900"
                >
                  {d}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </div>
    </div>
  );
}
