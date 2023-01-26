type Semester = {
  name: string
  slug: string
}

type Semestres = Semester[]

export const semesters: Semestres = [
  { name: 'Curso Inicial Virtual', slug: 'civ' }
]
