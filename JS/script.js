let coursesList=[
    {code: 'ACIT 1620',
    name: 'Fundemental Web Technology'},

    {code: 'ACIT 1420',
    name:'Introduction to System Administration'},

    {code:'Math 1310',
    name:'Math for IT'}
 ]; ///adding the courseList
console.log(coursesList); /// adding log function

 /// add the course list in 3 arrys or parts
  let courses = 1620
  for(let courses of coursesList )
  {
      if(courses.program === "BCIT" && courses)
      {
        courses ++;
      }
  }
console.log(courses); 