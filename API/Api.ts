export const _API_KEY = 'AIzaSyD5NnUtjQCz5AavJVe4q0r5oTj6xV4lFnA';
export const _GOOGLE_SHEETS_KEY =
	'1KUtdexwA3hVf9fdPmlKW9JfQnqHR5u1zCkvB6w7ioKc';

export const sheetRange = 'лист1!A2:Z9999';

export const _DRIVE_URL_BASE = 'https://www.googleapis.com/drive/v3/files';

const folderId = '1HTf8I35XQflhavhCRBJSKFqMxZsOLxJu';

export const params = {
	q: `'${folderId}' in parents`,
	key: _API_KEY,
	pageSize: 1000,
	pageToken: '',
};

export const paramsSheets = {
	range: sheetRange,
	pageSize: 1000,
};
