interface NumberedFeatureProps {
  number: string;
  title: string;
}

export function NumberedFeature({ number, title }: NumberedFeatureProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-xl font-bold text-gray-900">{number}</div>
      <div className="text-gray-800">{title}</div>
    </div>
  );
}
