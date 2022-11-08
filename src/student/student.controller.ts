import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Student } from '@prisma/client';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  }
}
