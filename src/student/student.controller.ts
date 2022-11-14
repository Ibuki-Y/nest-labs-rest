import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Grade, Profile, Student } from '@prisma/client';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Get('profile')
  getStudentProfiles(): Promise<Profile[]> {
    return this.studentService.getStudentProfiles();
  }

  @Get(':grade')
  getStudentByGrade(@Param('grade') grade: Grade): Promise<Student[]> {
    return this.studentService.getStudentByGrade(grade);
  }

  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  }

  @Get('profile/:id')
  getStudentProfileById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Profile> {
    return this.studentService.getStudentProfileById(id);
  }
}
