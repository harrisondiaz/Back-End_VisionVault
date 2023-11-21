class Idea {
    constructor({
                    IdeaID,
                    ThoughtID,
                    IdeaTitle,
                    IdeaDescription,
                    IdeaImageURL,
                    Tags,
                    CreatedBy,
                }) {
        this.IdeaID = IdeaID;
        this.ThoughtID = ThoughtID;
        this.IdeaTitle = IdeaTitle;
        this.IdeaDescription = IdeaDescription;
        this.IdeaImageURL = IdeaImageURL;
        this.Tags = Tags;
        this.CreatedBy = CreatedBy;
    }

    static fromJson(json) {
        return new Idea({
            IdeaID: json.IdeaID || 0,
            ThoughtID: json.ThoughtID || 0,
            IdeaTitle: json.IdeaTitle || '',
            IdeaDescription: json.IdeaDescription || '',
            IdeaImageURL: json.IdeaImageURL || '',
            Tags: json.Tags || [],
            CreatedBy: json.CreatedBy || '',
        });
    }

    toJson() {
        return {
            IdeaID: this.IdeaID,
            ThoughtID: this.ThoughtID,
            IdeaTitle: this.IdeaTitle,
            IdeaDescription: this.IdeaDescription,
            IdeaImageURL: this.IdeaImageURL,
            Tags: this.Tags,
            CreatedBy: this.CreatedBy,
        };
    }

}
module.exports = Idea;
