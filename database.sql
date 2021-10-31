CREATE TABLE IF NOT EXISTS ITEMS (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    product TEXT NOT NULL,
    manufacturer TEXT NOT NULL,
    device_type TEXT NOT NULL,
    serial TEXT NOT NULL,
    condition TEXT NOT NULL,
    year TEXT NOT NULL
)