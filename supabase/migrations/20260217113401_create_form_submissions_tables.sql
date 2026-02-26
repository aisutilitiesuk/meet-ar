/*
  # Form Submissions Database Schema
  
  1. New Tables
    - `site_submissions`
      - Site location, size, planning status, asking price
      - For property development land submissions
    - `investment_enquiries`
      - Opportunity type, location, GDV, capital required
      - For investment and JV opportunities
    - `construction_enquiries`
      - Project type, location, notes
      - For construction and utilities enquiries
    - `property_management_enquiries`
      - Portfolio details and contact information
      - For property management service requests
    - `recruitment_enquiries`
      - Organisation, sector, roles required
      - For workforce and recruitment needs
    - `partnership_enquiries`
      - Investment experience and areas of interest
      - For private partnership discussions
      
  2. Security
    - Enable RLS on all tables
    - Allow public inserts (form submissions)
    - Only authenticated admin users can read submissions
*/

-- Site Submissions Table
CREATE TABLE IF NOT EXISTS site_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_location text NOT NULL,
  site_size text NOT NULL,
  planning_status text NOT NULL,
  existing_use text,
  guide_price text,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE site_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit sites"
  ON site_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON site_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Investment Enquiries Table
CREATE TABLE IF NOT EXISTS investment_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_type text NOT NULL,
  location text NOT NULL,
  gdv text,
  capital_required text,
  timeline text,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE investment_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit investment enquiries"
  ON investment_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read investment enquiries"
  ON investment_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Construction Enquiries Table
CREATE TABLE IF NOT EXISTS construction_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organisation text,
  project_type text NOT NULL,
  location text NOT NULL,
  estimated_value text,
  start_date text,
  notes text,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE construction_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit construction enquiries"
  ON construction_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read construction enquiries"
  ON construction_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Property Management Enquiries Table
CREATE TABLE IF NOT EXISTS property_management_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organisation text,
  asset_type text NOT NULL,
  number_of_units text NOT NULL,
  location text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE property_management_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit property management enquiries"
  ON property_management_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read property management enquiries"
  ON property_management_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Recruitment Enquiries Table
CREATE TABLE IF NOT EXISTS recruitment_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organisation text NOT NULL,
  sector text NOT NULL,
  roles_required text NOT NULL,
  location_type text NOT NULL,
  duration text,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE recruitment_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit recruitment enquiries"
  ON recruitment_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read recruitment enquiries"
  ON recruitment_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Partnership Enquiries Table
CREATE TABLE IF NOT EXISTS partnership_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organisation text,
  investment_experience text NOT NULL,
  areas_of_interest text NOT NULL,
  phone text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partnership_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit partnership enquiries"
  ON partnership_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read partnership enquiries"
  ON partnership_enquiries
  FOR SELECT
  TO authenticated
  USING (true);