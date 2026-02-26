import { TrendingUp, PoundSterling, Award } from 'lucide-react';

export default function CredibilityStrip() {
  const stats = [
    {
      icon: PoundSterling,
      value: '£120m+',
      label: 'Annual Group Turnover',
    },
    {
      icon: TrendingUp,
      value: '£200m+',
      label: 'Secured Pipeline',
    },
    {
      icon: Award,
      value: 'National',
      label: 'Frameworks Delivered',
    },
  ];

  return (
    <section className="bg-[#213b5b] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="mx-auto mb-4 text-[#c32c28]" size={40} />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
