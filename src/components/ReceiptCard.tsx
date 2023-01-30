import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {
  receipt: any;
};

function ReceiptCard({ receipt }: Props) {
  function getRandomFloat() {
    const str = (Math.random() * (200 - 2) + 2).toFixed(2);

    return parseFloat(str);
  }

  const str = new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "/")
    .replace("T", " ");

  return (
    <div
      key={receipt.email}
      className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-xl dark:divide-slate-600 dark:bg-slate-800"
    >
      <div className="flex flex-1 flex-col p-8">
        <div className={`mx-auto flex items-center rounded-full`}>
          {getRandomFloat()} €
        </div>

        <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-white">
          {receipt.name}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500 dark:text-slate-200">{str}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              {receipt.role}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="group -mt-px flex decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
          <div className="flex w-0 flex-1">
            <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-blue-500 ">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400 group-hover:text-blue-500"
                aria-hidden="true"
              />
              <span className="ml-3">View Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptCard;
