export const COLUMNS = [
  { key: 'employee_id', name: 'Employee ID' },
  { key: 'country', name: 'Country' },
  { key: 'department', name: 'Department' },
  { key: 'role', name: 'Role' },
]

export const FILTERS = [
  {
    key: 'country',
    name: 'Country',
    values: ['United States', 'France', 'Germany', 'Spain'],
  },
  {
    key: 'department',
    name: 'Department',
    values: [
      'Marketing',
      'Support',
      'Engineering',
      'Sales',
      'Services',
      'Human Resources',
      'Training',
      'Legal',
    ],
  },
  {
    key: 'role',
    name: 'Role',
    values: [
      'Estimator',
      'Supervisor',
      'Electrician',
      'Surveyor',
      'Engineer',
      'Architect',
      'Subcontractor',
    ],
  },
]
