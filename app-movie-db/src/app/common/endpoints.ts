import { GlobalConstants } from './global-constants';

export class EndPoints {
    public static popularMovies = `${GlobalConstants.basicUrl}movie/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static topRatedMovies = `${GlobalConstants.basicUrl}movie/top_rated/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static popularSeries = `${GlobalConstants.basicUrl}tv/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static movieGenres = `${GlobalConstants.basicUrl}genre/movie/list${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static movieDiscover = `${GlobalConstants.basicUrl}genre/discover/movie`;
    public static movie = `${GlobalConstants.basicUrl}movie/`;
    public static serie = `${GlobalConstants.basicUrl}tv/`;
}
