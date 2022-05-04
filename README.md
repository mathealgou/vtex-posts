# custom-posts

A block that fetches info from an API and displays it orderly.

![Media Placeholder](https://i.imgur.com/xRg7Ydi.png)

## Configuration

1. Adding the app as a theme dependency in the `manifest.json` file.

```json
"vtex.posts": "0.x",
```

2. Declaring the app's main block in a given theme template or inside another block from the theme.

```json
	"custom-posts": {
		"props": {
			"url": "https://jsonplaceholder.typicode.com/posts",
            "itemsPerPage": 5
		}
	}
```

3. On the API.

The API call should return an array of objects containing "title" and "body" keys in json form.

### `custom-posts` props

| Prop name     | Type            | Description                                               | Default value        | Required |
| ------------- | --------------- | --------------------------------------------------------- | -------------------- | -------- |
| `url`         | `string`       | The url from which the block will fetch it's data.         | `null`               | `Yes`    |
| `itemsPerPage`| `XXXXXX`       | The number of items that will be displayed in each page.   | `6`                  | `No`.    |


## Customization

| CSS Handles |
| ----------- | 
| `postsWrapper` | 
| `postsContainer` | 
| `postSearchInput` | 
| `postSearchButton` | 
| `postWrapper` |
| `postContainer` |
| `postTitle` |
| `postBody` |
| `pageSelectorWrapper` |
| `pageSelectorContainer` |
| `pageSelectorButtonPlus` |
| `pageSelectorButtonMinus` |
| `pageSelectorbuttonPlusDisabled` |
| `pageSelectorbuttonMinusDisabled` |
| `pageSelectorCurrentPage` |

