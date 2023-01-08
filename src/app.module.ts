import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { ReportModule } from './report/report.module';
import { FacultyModule } from './faculty/faculty.module';
import { DepartmentModule } from './department/department.module';
import { ProfileModule } from './profile/profile.module';
import { ResponseTimeMiddleware } from './logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    StudentModule,
    ReportModule,
    FacultyModule,
    DepartmentModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, StudentService, ResponseTimeMiddleware],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ResponseTimeMiddleware).forRoutes('');
  }
}
