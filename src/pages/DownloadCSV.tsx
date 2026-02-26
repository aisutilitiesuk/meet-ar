import { Download } from 'lucide-react';
import Button from '../components/Button';

export default function DownloadCSV() {
  const csvContent = `Form Name,Field Name,Field Type,Required,Database Table,Database Column,Description
Site Submissions,Site Location,text,Yes,site_submissions,site_location,Location of the property site
Site Submissions,Site Size,text,Yes,site_submissions,site_size,"Size in acres or units (e.g., 2 acres)"
Site Submissions,Planning Status,select,Yes,site_submissions,planning_status,"Options: Outline Permission, Full Permission, No Permission, Pre-Application"
Site Submissions,Existing Use,text,No,site_submissions,existing_use,Current use of the site
Site Submissions,Guide Price,text,No,site_submissions,guide_price,Asking price for the site
Site Submissions,Your Name,text,Yes,site_submissions,name,Contact name
Site Submissions,Phone,tel,No,site_submissions,phone,Contact phone number
Site Submissions,Email,email,Yes,site_submissions,email,Contact email address
Investment Enquiries,Opportunity Type,text,Yes,investment_enquiries,opportunity_type,"Type of investment opportunity (e.g., Land JV, Forward Funding)"
Investment Enquiries,Location,text,Yes,investment_enquiries,location,Project location
Investment Enquiries,GDV,text,No,investment_enquiries,gdv,Gross Development Value (if known)
Investment Enquiries,Capital Required,text,No,investment_enquiries,capital_required,Amount of capital needed
Investment Enquiries,Timeline,text,No,investment_enquiries,timeline,Expected timeline for project
Investment Enquiries,Your Name,text,Yes,investment_enquiries,name,Contact name
Investment Enquiries,Phone,tel,No,investment_enquiries,phone,Contact phone number
Investment Enquiries,Email,email,Yes,investment_enquiries,email,Contact email address
Construction Enquiries,Organisation,text,No,construction_enquiries,organisation,Company or organisation name
Construction Enquiries,Project Type,text,Yes,construction_enquiries,project_type,Type of construction project
Construction Enquiries,Location,text,Yes,construction_enquiries,location,Project location
Construction Enquiries,Estimated Value,text,No,construction_enquiries,estimated_value,Estimated project value
Construction Enquiries,Start Date,text,No,construction_enquiries,start_date,Expected start date
Construction Enquiries,Notes,textarea,No,construction_enquiries,notes,Additional project details
Construction Enquiries,Your Name,text,Yes,construction_enquiries,name,Contact name
Construction Enquiries,Phone,tel,No,construction_enquiries,phone,Contact phone number
Construction Enquiries,Email,email,Yes,construction_enquiries,email,Contact email address
Property Management Enquiries,Name,text,Yes,property_management_enquiries,name,Contact name
Property Management Enquiries,Organisation,text,No,property_management_enquiries,organisation,Company or organisation name (if applicable)
Property Management Enquiries,Asset Type,select,Yes,property_management_enquiries,asset_type,"Options: Residential, BTR, PBSA, Mixed Use"
Property Management Enquiries,Number of Units,text,Yes,property_management_enquiries,number_of_units,Total number of units in portfolio
Property Management Enquiries,Location,text,Yes,property_management_enquiries,location,Property location
Property Management Enquiries,Phone,tel,No,property_management_enquiries,phone,Contact phone number
Property Management Enquiries,Email,email,Yes,property_management_enquiries,email,Contact email address
Recruitment Enquiries,Organisation,text,Yes,recruitment_enquiries,organisation,Company or organisation name
Recruitment Enquiries,Sector,select,Yes,recruitment_enquiries,sector,"Options: Construction, Rail, Utilities, Infrastructure, Other"
Recruitment Enquiries,Roles Required,text,Yes,recruitment_enquiries,roles_required,Description of roles needed
Recruitment Enquiries,Location Type,select,Yes,recruitment_enquiries,location_type,"Options: Onsite, Remote, Hybrid"
Recruitment Enquiries,Duration,text,No,recruitment_enquiries,duration,"Duration of engagement (e.g., 6 months, permanent)"
Recruitment Enquiries,Your Name,text,Yes,recruitment_enquiries,name,Contact name
Recruitment Enquiries,Phone,tel,No,recruitment_enquiries,phone,Contact phone number
Recruitment Enquiries,Email,email,Yes,recruitment_enquiries,email,Contact email address
Partnership Enquiries,Name,text,Yes,partnership_enquiries,name,Contact name
Partnership Enquiries,Organisation,text,No,partnership_enquiries,organisation,Company or organisation name (if applicable)
Partnership Enquiries,Investment Experience,textarea,Yes,partnership_enquiries,investment_experience,Brief overview of investment background
Partnership Enquiries,Areas of Interest,textarea,Yes,partnership_enquiries,areas_of_interest,"Investment focus areas (e.g., Property development, Infrastructure, Joint ventures)"
Partnership Enquiries,Phone,tel,No,partnership_enquiries,phone,Contact phone number
Partnership Enquiries,Email,email,Yes,partnership_enquiries,email,Contact email address`;

  const handleDownload = () => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'BREVO_FORMS_ATTRIBUTES.csv');
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Download className="w-16 h-16 text-[#c32c28] mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-[#213b5b] mb-4">
              Download Brevo Forms CSV
            </h1>
            <p className="text-gray-600 mb-8">
              This CSV contains all form attributes for your 6 contact forms, ready for Brevo integration.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-[#213b5b] mb-4">Included Forms:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Site Submissions</strong> - 8 fields for property development land submissions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Investment Enquiries</strong> - 8 fields for partnership opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Construction Enquiries</strong> - 9 fields for construction projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Property Management Enquiries</strong> - 7 fields for portfolio management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Recruitment Enquiries</strong> - 8 fields for workforce needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c32c28] mr-2">•</span>
                <span><strong>Partnership Enquiries</strong> - 6 fields for private investment</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button onClick={handleDownload}>
              <Download className="w-5 h-5 mr-2" />
              Download CSV File
            </Button>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-[#213b5b] mb-2">CSV Structure:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Form Name</li>
              <li>• Field Name</li>
              <li>• Field Type (text, email, tel, textarea, select)</li>
              <li>• Required status</li>
              <li>• Database Table name</li>
              <li>• Database Column name</li>
              <li>• Description (including dropdown options where applicable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
