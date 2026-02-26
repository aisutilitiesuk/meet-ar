import { Building2, Hammer, Zap, Users } from 'lucide-react';

export default function GroupOverview() {
  const groups = [
    {
      icon: Building2,
      title: 'Property',
      services: ['Development', 'Estate Agency', 'Management'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Hammer,
      title: 'Construction',
      services: ['Main Contractor', 'M&E', 'Facilities'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Infrastructure',
      services: ['Utilities', 'Civils', 'Jointing', 'Traffic Management'],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'Workforce',
      services: ['Construction Recruitment', 'International EOR'],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213b5b] mb-4">
            Group Overview
          </h2>
          <p className="text-lg text-gray-600">
            Integrated capabilities across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#213b5b] mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.services.map((service) => (
                    <li key={service} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#c32c28] rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
