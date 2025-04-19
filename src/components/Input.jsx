export default function Input({ label, invalid, ...props }) {
  let labelClass =
    'block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300';

  let inputClass =
    'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300';

  if (invalid) {
    labelClass =
      'block mb-2 text-xs font-bold tracking-wide uppercase text-red-400';
    inputClass =
      'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-red-200 focus:outline-none focus:bg-red-100 focus:border-red-500';
  }

  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input
        className={inputClass}
        {...props}
      />
    </p>
  );
}
