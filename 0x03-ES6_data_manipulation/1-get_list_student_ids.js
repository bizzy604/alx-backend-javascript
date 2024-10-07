/**
 * Retrieves iDs from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} array - The list of students.
 * @returns
 */
export default function getListStudentIds(array) {
	if (array instanceof Array) {
	return array.map((array) => array.id);
	}
	return [];
}
