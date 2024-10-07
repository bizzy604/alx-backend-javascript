export default function getStudentsByLocation(array, city) {
	if (array instanceof Array) {
		return array.filter((a) => a.location === city);
	}
	return [];
}
