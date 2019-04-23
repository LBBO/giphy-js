/**
 * If you want gifs or stickers
 */
export type MediaType = 'stickers' | 'gifs'
/**
 * Filters results by specified rating.
 */
type Rating = 'pg' | 'g' | 'unrated' | 'pg-13' | 'r'
/**
 * Sorting options
 */
type SortTypes = 'relevant' | 'recent'

export interface TypeOption {
    type?: MediaType
}

export interface PaginationOptions {
    // the number of gifs/stickers to fetch
    limit?: number
    // the starting point
    offset?: number
}
export interface CategoriesOptions extends PaginationOptions {}
export interface SubcategoriesOptions extends PaginationOptions {}
export interface RelatedOptions extends PaginationOptions {}

export interface TrendingOptions extends PaginationOptions, TypeOption {
    rating?: Rating
}

export interface RandomOptions extends PaginationOptions, TypeOption {
    tag?: string
    rating?: Rating
}

export interface SearchOptions extends PaginationOptions, TypeOption {
    sort?: SortTypes
    rating?: Rating
    lang?: string
}
