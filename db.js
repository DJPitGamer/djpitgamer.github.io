// IndexedDB Management
const DB_NAME = 'PineappleHaterBlog';
const DB_VERSION = 1;

let db;

// Initialize IndexedDB
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            console.error('Database failed to open');
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            console.log('Database opened successfully');
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;

            // Create Comments object store
            if (!db.objectStoreNames.contains('comments')) {
                const commentStore = db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
                commentStore.createIndex('postId', 'postId', { unique: false });
                commentStore.createIndex('timestamp', 'timestamp', { unique: false });
            }

            // Create Ratings object store
            if (!db.objectStoreNames.contains('ratings')) {
                const ratingStore = db.createObjectStore('ratings', { keyPath: 'id', autoIncrement: true });
                ratingStore.createIndex('foodName', 'foodName', { unique: false });
                ratingStore.createIndex('timestamp', 'timestamp', { unique: false });
            }

            console.log('Database upgraded');
        };
    });
}

// Add Comment
function addCommentToDB(postId, name, text) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['comments'], 'readwrite');
        const store = transaction.objectStore('comments');

        const comment = {
            postId: postId,
            name: name,
            text: text,
            timestamp: new Date().getTime()
        };

        const request = store.add(comment);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

// Get Comments for a Post
function getCommentsForPost(postId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['comments'], 'readonly');
        const store = transaction.objectStore('comments');
        const index = store.index('postId');

        const request = index.getAll(postId);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            const comments = request.result.sort((a, b) => b.timestamp - a.timestamp);
            resolve(comments);
        };
    });
}

// Delete Comment
function deleteCommentFromDB(commentId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['comments'], 'readwrite');
        const store = transaction.objectStore('comments');

        const request = store.delete(commentId);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
    });
}

// Add Rating
function addRatingToDB(foodName, isYummy) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['ratings'], 'readwrite');
        const store = transaction.objectStore('ratings');

        const rating = {
            foodName: foodName.toLowerCase(),
            isYummy: isYummy,
            timestamp: new Date().getTime()
        };

        const request = store.add(rating);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

// Get All Ratings
function getAllRatings() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['ratings'], 'readonly');
        const store = transaction.objectStore('ratings');

        const request = store.getAll();

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            const ratings = request.result;
            resolve(ratings);
        };
    });
}

// Get Aggregated Ratings (count yummy vs not yummy)
function getAggregatedRatings() {
    return new Promise((resolve, reject) => {
        getAllRatings().then(ratings => {
            const aggregated = {};

            ratings.forEach(rating => {
                const foodName = rating.foodName;
                if (!aggregated[foodName]) {
                    aggregated[foodName] = { yummy: 0, notYummy: 0 };
                }
                if (rating.isYummy) {
                    aggregated[foodName].yummy++;
                } else {
                    aggregated[foodName].notYummy++;
                }
            });

            resolve(aggregated);
        }).catch(reject);
    });
}

// Clear all data (for testing)
function clearAllData() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['comments', 'ratings'], 'readwrite');
        const commentsStore = transaction.objectStore('comments');
        const ratingsStore = transaction.objectStore('ratings');

        const clearComments = commentsStore.clear();
        const clearRatings = ratingsStore.clear();

        clearComments.onerror = () => reject(clearComments.error);
        clearRatings.onerror = () => reject(clearRatings.error);

        transaction.oncomplete = () => resolve();
    });
}

// Initialize DB on page load
window.addEventListener('DOMContentLoaded', () => {
    initDB().catch(error => console.error('Failed to initialize database:', error));
});
