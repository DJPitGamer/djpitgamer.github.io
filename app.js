// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: 'Why Pineapple on Pizza is a Crime Against Humanity',
        date: 'March 15, 2024',
        excerpt: 'Let\'s discuss the cardinal sin of pizza toppings and why pineapple has no place on our beloved Italian creation.',
        content: `Pineapple on pizza. Just saying those words makes many of us cringe. But why? Let's break it down.

First, there's the fundamental issue of flavor profiles. Pizza is meant to be savory, with carefully balanced toppings that complement the cheese and sauce. Pineapple is sweet—aggressively sweet. When you bite into Hawaiian pizza, you're not experiencing a harmonious blend of flavors; you're experiencing a flavor war in your mouth.

Second, the texture is all wrong. Pineapple becomes mushy when cooked, creating an unpleasant contrast with the crispy crust and chewy cheese. It's like someone decided that pizza needed to taste like a fruit salad.

Third, and perhaps most importantly, it's disrespectful to pizza tradition. Pizza has centuries of history, perfected by Italian masters. Pineapple is a modern abomination that has no place in this legacy.

The solution? Keep pineapple where it belongs—in tropical drinks, fruit salads, and maybe some Asian cuisine. But pizza? Never.`
    },
    {
        id: 2,
        title: 'The Great Pineapple Debate: Science Weighs In',
        date: 'March 10, 2024',
        excerpt: 'What does science say about pineapple as a pizza topping? The results might surprise you.',
        content: `Scientists have actually studied food pairing, and the results are fascinating. According to food science research, ingredients that share similar flavor compounds tend to work well together.

Pineapple contains bromelain, an enzyme that breaks down proteins. This is why it's used in marinades and why your mouth feels weird after eating too much fresh pineapple. On pizza, this enzyme interacts with the cheese in ways that most palates find... unpleasant.

Furthermore, studies on taste preferences show that sweet and savory combinations work best when the sweet element is subtle and balanced. Pineapple is neither subtle nor balanced—it's a flavor bomb that overpowers everything else on the pizza.

Neuroscientists have also found that our brains are wired to prefer foods that follow certain flavor patterns. Pineapple on pizza violates these patterns, which is why so many people find it objectionable.

The science is clear: pineapple and pizza are a mismatch made in flavor hell.`
    },
    {
        id: 3,
        title: 'Delicious Alternatives to Pineapple',
        date: 'March 5, 2024',
        excerpt: 'If you want something sweet and interesting on your pizza, try these alternatives instead.',
        content: `If you're craving something a bit different on your pizza, there are so many better options than pineapple!

Caramelized onions are a fantastic choice. They provide a subtle sweetness that complements the savory elements perfectly. The caramelization process concentrates the natural sugars, creating depth and complexity.

Roasted garlic is another excellent option. It's sweet when roasted, but in a completely different way than pineapple. It adds richness and sophistication to any pizza.

For those who want a bit of heat and sweetness, roasted red peppers are perfect. They're naturally sweet but also have a subtle smokiness that works beautifully with cheese and sauce.

Even fresh figs, when used sparingly, can add an elegant sweetness to a gourmet pizza. They're far more refined than pineapple and actually complement the other ingredients.

The point is: there are countless ways to add interesting flavors to pizza without resorting to the tropical fruit abomination. Get creative, but please, keep the pineapple away.`
    },
    {
        id: 4,
        title: 'Pineapple in Other Cuisines: Where It Actually Belongs',
        date: 'February 28, 2024',
        excerpt: 'Pineapple has its place in the culinary world—just not on pizza.',
        content: `Let's be fair: pineapple isn't inherently bad. It's delicious in many contexts. The problem is that people keep trying to put it where it doesn't belong.

In Thai cuisine, pineapple is used brilliantly. Pineapple fried rice, for example, uses the fruit as a vessel and incorporates its sweetness into a balanced dish with savory curry, vegetables, and protein. It works because the pineapple is part of a carefully constructed flavor profile.

In Hawaiian cuisine, pineapple is used with respect and tradition. It's paired with appropriate proteins and seasonings that complement its natural sweetness.

In cocktails, pineapple juice is essential. A piña colada wouldn't be the same without it. Here, the sweetness is expected and desired.

The lesson? Pineapple is wonderful when used appropriately. The problem is when people take it out of its natural habitat and force it onto pizza, where it has no business being.

Respect the fruit. Use it in the right context. And for the love of all that is holy, keep it off your pizza.`
    }
];

let currentPostId = null;

// Navigation Functions
function showHome() {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('home-section').classList.add('active');
    window.scrollTo(0, 0);
}

function showBlog() {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('blog-section').classList.add('active');
    loadBlogPosts();
    window.scrollTo(0, 0);
}

function showRatings() {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('ratings-section').classList.add('active');
    loadRatings();
    window.scrollTo(0, 0);
}

// Load Blog Posts
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'blog-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="date">${post.date}</div>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more" onclick="openPost(${post.id}); return false;">Read More →</a>
        `;
        blogPostsContainer.appendChild(postCard);
    });
}

// Open Post Detail
function openPost(postId) {
    currentPostId = postId;
    const post = blogPosts.find(p => p.id === postId);

    if (!post) return;

    const postDetail = document.getElementById('post-detail');
    postDetail.innerHTML = `
        <h2>${post.title}</h2>
        <div class="date">${post.date}</div>
        <div style="margin-top: 20px; line-height: 1.8;">
            ${post.content.split('\n\n').map(para => `<p>${para}</p>`).join('')}
        </div>
    `;

    loadComments(postId);
    document.getElementById('post-modal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('post-modal').style.display = 'none';
    currentPostId = null;
    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';
}

// Load Comments
async function loadComments(postId) {
    try {
        const comments = await getCommentsForPost(postId);
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = '';

        if (comments.length === 0) {
            commentsList.innerHTML = '<p style="color: #999; text-align: center;">No comments yet. Be the first!</p>';
            return;
        }

        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            const date = new Date(comment.timestamp).toLocaleDateString();
            commentDiv.innerHTML = `
                <div class="comment-author">${escapeHtml(comment.name)} <span style="color: #999; font-size: 0.9rem;">• ${date}</span></div>
                <div class="comment-text">${escapeHtml(comment.text)}</div>
            `;
            commentsList.appendChild(commentDiv);
        });
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

// Add Comment
async function addComment() {
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!name || !text) {
        alert('Please fill in both name and comment');
        return;
    }

    if (!currentPostId) {
        alert('No post selected');
        return;
    }

    try {
        await addCommentToDB(currentPostId, name, text);
        document.getElementById('commentName').value = '';
        document.getElementById('commentText').value = '';
        await loadComments(currentPostId);
    } catch (error) {
        console.error('Error adding comment:', error);
        alert('Failed to add comment');
    }
}

// Load Ratings
async function loadRatings() {
    try {
        const aggregated = await getAggregatedRatings();
        const ratingsList = document.getElementById('ratings-list');
        ratingsList.innerHTML = '';

        if (Object.keys(aggregated).length === 0) {
            ratingsList.innerHTML = '<p style="color: #999; text-align: center;">No ratings yet. Be the first to rate!</p>';
            return;
        }

        // Sort by total votes
        const sorted = Object.entries(aggregated).sort((a, b) => {
            const totalA = a[1].yummy + a[1].notYummy;
            const totalB = b[1].yummy + b[1].notYummy;
            return totalB - totalA;
        });

        sorted.forEach(([foodName, stats]) => {
            const total = stats.yummy + stats.notYummy;
            const yummyPercent = Math.round((stats.yummy / total) * 100);
            const notYummyPercent = Math.round((stats.notYummy / total) * 100);

            const ratingItem = document.createElement('div');
            ratingItem.className = 'rating-item';
            ratingItem.innerHTML = `
                <div>
                    <div class="rating-name">${escapeHtml(foodName)}</div>
                    <div style="margin-top: 8px; display: flex; gap: 10px;">
                        <span class="rating-badge badge-yummy">👍 ${stats.yummy} (${yummyPercent}%)</span>
                        <span class="rating-badge badge-not-yummy">👎 ${stats.notYummy} (${notYummyPercent}%)</span>
                    </div>
                </div>
            `;
            ratingsList.appendChild(ratingItem);
        });
    } catch (error) {
        console.error('Error loading ratings:', error);
    }
}

// Rate Food - Yummy
async function rateFoodYummy() {
    const foodName = document.getElementById('foodName').value.trim();
    if (!foodName) {
        alert('Please enter a food name');
        return;
    }

    try {
        await addRatingToDB(foodName, true);
        document.getElementById('foodName').value = '';
        await loadRatings();
    } catch (error) {
        console.error('Error adding rating:', error);
        alert('Failed to add rating');
    }
}

// Rate Food - Not Yummy
async function rateFoodNotYummy() {
    const foodName = document.getElementById('foodName').value.trim();
    if (!foodName) {
        alert('Please enter a food name');
        return;
    }

    try {
        await addRatingToDB(foodName, false);
        document.getElementById('foodName').value = '';
        await loadRatings();
    } catch (error) {
        console.error('Error adding rating:', error);
        alert('Failed to add rating');
    }
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('post-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    showHome();
});
