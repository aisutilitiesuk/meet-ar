import { Link } from 'react-router-dom';
import { Building2, Home, Hammer, Zap, Users, TrendingUp } from 'lucide-react';

export default function ServiceTiles() {
  const services = [
    {
      icon: Building2,
      title: 'Property Development',
      description: 'Land-led development with forward funding and JV opportunities',
      link: '/property-development',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Home,
      title: 'Property & Facilities Management',
      description: '800+ properties under management with integrated billing',
      link: '/property-management',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'High-volume housing and refurbishment delivery',
      link: '/construction',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Utilities',
      description: '£40m+ secured infrastructure pipeline',
      link: '/utilities',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'Recruitment',
      description: 'Construction, rail & international workforce solutions',
      link: '/recruitment',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      description: 'Private capital partnerships and strategic opportunities',
      link: '/investment',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213b5b] mb-4">
            How Can We Work Together?
          </h2>
          <p className="text-lg text-gray-600">
            Choose your area of interest to learn more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#213b5b] mb-2 group-hover:text-[#c32c28] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
