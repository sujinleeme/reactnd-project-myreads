const words = [
  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
  'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
  'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket',
  'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama',
  'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance',
  'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History',
  'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
  'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
  'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography',
  'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux',
  'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare',
  'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
  'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]

/**
 * Convert Searchable Keywords list to object
 * Result will be
 * { value: 0, label: 'android' }
 * { value: 1, label: 'art' } ....
 */

export const SearchKeywords = words.map((currentValue, index) => (
  {'value': index, 'label': currentValue.toLowerCase()})
)
