import { gradeConstants } from "../constants";

const initialState = {
  semesterList: ["2017/1", "2017/2"],
  "2017/1": {
    courseList: [
      { id: 1, name: "course1", credit: 3, grade: "A" },
      { id: 2, name: "course2", credit: 3, grade: "A" }
    ],
    stat: { ca: 6, gpa: 4, cax: 6, gpax: 4 }
  },
  "2017/2": {
    courseList: [
      { id: 3, name: "course3", credit: 3, grade: "A" },
      { id: 4, name: "course4", credit: 3, grade: "A" },
      { id: 5, name: "course5", credit: 3, grade: "A" }
    ],
    stat: { ca: 9, gpa: 4, cax: 15, gpax: 4 }
  }
};

export function grade(state = initialState, action) {
  switch (action.type) {
    case gradeConstants.GRADE_REQUEST:
      return {
        requesting: true,
        id: action.id
      };
    case gradeConstants.GRADE_SUCCESS:
      return {
        ...action.grade
      };
    case gradeConstants.GRADE_FAILURE:
      return {};
    default:
      return state;
  }
}
