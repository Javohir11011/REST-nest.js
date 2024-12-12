import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from 'src/schema/artist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistService {
  constructor(@InjectModel('artist') private artsitModel: Model<Artist>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const newArtist = new this.artsitModel(createArtistDto);
    await newArtist.save();
    return newArtist;
  }

  async findAll() {
    const allArtist = await this.artsitModel.find();
    return allArtist;
  }

  async findOne(id: number): Promise<Artist> {
    const artist = await this.artsitModel.findById(id);
    return artist;
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    const edidedArtist = this.artsitModel.findByIdAndUpdate(
      id,
      updateArtistDto,
      {
        new: true,
      },
    );
    return edidedArtist;
  }

  remove(id: number) {
    const delUser = this.artsitModel.findByIdAndDelete(id);
    return delUser;
  }
}
