enum ResourceType {
	BOOK,
	AUTHOR,
	FILM,
	DIRECTOR,
	PERSON,
}

interface ResourceEnum<T> {
	uid: number
	resourceType: ResourceType
	data: T
}

const docOneOne: ResourceEnum<object> = {
	uid: 1,
	resourceType: ResourceType.BOOK,
	data: { title: "books name" }, // it could be different here, because in interface you set T for data field.
}

console.log(docOneOne)
