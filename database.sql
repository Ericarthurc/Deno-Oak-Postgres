CREATE TABLE IF NOT EXISTS ITEMS (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    product VARCHAR(150) NOT NULL,
    serial VARCHAR(150) NOT NULL,
    condition VARCHAR(150) NOT NULL,
    year VARCHAR(150) NOT NULL
)