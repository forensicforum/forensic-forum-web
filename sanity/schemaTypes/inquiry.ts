export default {
  name: 'inquiry',
  title: 'Inquiry Ledger',
  type: 'document',
  icon: () => '📥', // Keeps it visually distinct in the sidebar
  // This makes the entire document read-only so it acts as a true log
  readOnly: true, 
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'institution', title: 'Institution', type: 'string' },
    { name: 'details', title: 'Message Details', type: 'text' },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime' }
  ],
  preview: {
    select: {
      title: 'institution',
      subtitle: 'name',
    }
  }
}