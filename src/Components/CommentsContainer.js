import React from "react";

const commentsData = [
  {
    name: "Amit Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Sunita Verma",
        text: "Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
        replies: [],
      },
      {
        name: "Rajesh Kumar",
        text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        replies: [
          {
            name: "Meena Singh",
            text: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            replies: [
              {
                name: "Arjun Patel",
                text: "Pellentesque in ipsum id orci porta dapibus.",
                replies: [],
              },
              {
                name: "Pooja Agarwal",
                text: "Vivamus suscipit tortor eget felis porttitor volutpat.",
                replies: [],
              },
              {
                name: "Ravi Gupta",
                text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
                replies: [
                  {
                    name: "Neha Mehta",
                    text: "Curabitur aliquet quam id dui posuere blandit.",
                    replies: [],
                  },
                  {
                    name: "Suresh Iyer",
                    text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Anjali Rao",
            text: "Donec sollicitudin molestie malesuada.",
            replies: [],
          },
        ],
      },
      {
        name: "Vikram Desai",
        text: "Proin eget tortor risus.",
        replies: [
          {
            name: "Nisha Jain",
            text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            replies: [],
          },
          {
            name: "Rohit Chawla",
            text: "Nulla porttitor accumsan tincidunt.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Kavita Menon",
    text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    replies: [],
  },
  {
    name: "Vijay Nair",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    replies: [],
  },
  {
    name: "Priya Kapoor",
    text: "Cras ultricies ligula sed magna dictum porta.",
    replies: [],
  },
  {
    name: "Deepak Malhotra",
    text: "Donec rutrum congue leo eget malesuada.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={Math.random()}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[860px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
