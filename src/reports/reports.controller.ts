import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  Delete,
  Get,
  UseInterceptors,
  UploadedFile,
  Put,
  Res,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { UpdateReportDto } from './dtos/update-report.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname, join } from 'path';
import { Observable, of } from 'rxjs';
import { Bookmark } from '@mui/icons-material';

const storage = {
  storage: diskStorage({
    destination: './files',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
};

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get()
  viewReports() {
    return this.reportsService.viewAll();
  }

  @Post()
  @Serialize(ReportDto)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  @UseGuards(AuthGuard)
  createReport(
    // @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateReportDto,
    @CurrentUser() user: User,
  ) {
    return this.reportsService.create(body, user);
  }

  @Get('record/:id')
  findOneReport(@Param('id') id: string) {
    const data = this.reportsService.findOneReport(parseInt(id));
    if (!data) {
      console.log('not found');
    }
  }

  @Get('bookmark')
  viewBookmarked() {
    return this.reportsService.ViewMarked();
  }

  @Patch('/:id')
  updateReport(@Param('id') id: string, @Body() body: UpdateReportDto) {
    return this.reportsService.updateReport(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.reportsService.remove(parseInt(id));
  }

  @Get('profile-image/:imagename')
  findProfileImage(
    @Param('imagename') imagename,
    @Res() res,
    // eslint-disable-next-line @typescript-eslint/ban-types
  ): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }

  @Post('/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleUpload(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    // console.log('file', file);
    const filename: string = file.filename;
    const id = parseInt(body.id);
    // console.log(id);
    // console.log(filename);

    return this.reportsService.upload(id, filename);
  }
}
