-- Add new section types to the enum (must be done separately)
ALTER TYPE product_section ADD VALUE IF NOT EXISTS 'under_30';
ALTER TYPE product_section ADD VALUE IF NOT EXISTS 'bundles';