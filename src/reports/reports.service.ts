import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from '../users/user.entity';
import path from 'path';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  viewAll() {
    console.log('asdsad');

    return this.repo.find();
  }
  create(reportDto: CreateReportDto, user: User) {
    const report = this.repo.create(reportDto);
    report.user = user;
    // report.cvFile = file.filename;
    console.log(report.user.id);

    return this.repo.save(report);
  }

  findOneReport(id: number) {
    if (!id) {
      return null;
    }
    const data = this.repo.findOne(id);
    console.log(data);

    return data;
  }

  async updateReport(id: number, attrs: Partial<Report>) {
    const report = await this.findOneReport(id);
    if (!report) {
      throw new NotFoundException('report not found');
    }
    console.log('abcd');
    Object.assign(report, attrs);

    return this.repo.save(report);
  }

  async upload(id: number, filename: string) {
    const report = await this.findOneReport(id);
    if (!report) {
      throw new NotFoundException('report not found');
    }
    report.cvFile = filename;
    return this.repo.save(report);
    console.log('abcd');
  }

  async viewFile(filename: string, res) {
    const filname = filename;
    // eslint-disable-next-line prettier/prettier

    const currentPath = path.resolve(`../../uploads/${filename}`);
    const directoryPath = process.cwd();
    const absolutePath = path.join(currentPath + directoryPath);
    const fileeee = res.sendFile(absolutePath);
    console.log(fileeee);

    return fileeee;
  }
  async remove(id: number) {
    const report = await this.findOneReport(id);
    if (!report) {
      throw new NotFoundException('user not found');
    }
    return await this.repo.remove(report);
  }

  async ViewMarked() {
    const data = await this.repo.find({
      where: {
        bookmark: true,
      },
    });
    console.log(data);
    return data;
  }
}
