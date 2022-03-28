import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  HasManyCountAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin
} from 'sequelize';

import { Artist } from './artist';
import { AlbumToken } from './albumToken';

class Album extends Model {
  public name!: string;
  public year!: string;
  public description?: string;
  public number_of_tokens!: number;
  public tokens_image!: string;
  public tokens_value!: number;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Token association with methods
  public countAlbumTokens!: HasManyCountAssociationsMixin;
  public addAlbumToken!: HasManyAddAssociationMixin<AlbumToken, number>; //how do we add like 100 tokens at once?
  public getAlbumTokens!: HasManyGetAssociationsMixin<AlbumToken>;

  // Token association without methods
  public hasAlbumToken!: HasManyHasAssociationMixin<AlbumToken, number>;
  public hasAlbumTokens!: HasManyHasAssociationMixin<AlbumToken, number>;

  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly albumTokens?: AlbumToken[];

  public static associations: {
    artist: Association<Artist, Album>;
    tokens: Association<Album, AlbumToken>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        year: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
        },
        number_of_tokens: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        tokens_image: {
          type: DataTypes.STRING,
          allowNull: true
        },
        tokens_value: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { sequelize })
  }
}
export { Album };
