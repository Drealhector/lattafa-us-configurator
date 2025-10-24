-- Delete AI-generated products from under_30 section
DELETE FROM products WHERE id IN (
  'b8349dc6-9236-49c2-9de7-522a44e91786',
  '976f5b6f-d9d3-4e5e-a296-f76305c4fc96',
  'a75f020d-8173-4a73-ab14-61f7255294ec',
  'c3136cf9-f53c-4204-9f24-c08cf327bff1',
  '8c9878ca-ba00-444d-88f5-e5c5a283c8d5',
  'd49ea43b-3af4-4f6f-a5d1-55995850fa95'
);