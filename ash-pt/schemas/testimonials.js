
const testimonials = {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the person giving the testimonial.',
      },
      {
        name: 'yearsTraining',
        title: 'Years of Training',
        type: 'number',
        description: 'The number of years of training the person has undergone.',
      },
      {
        name: 'testimony',
        title: 'Testimony',
        type: 'text',
        description: 'The testimonial content provided by the person.',
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
        description: 'A photo of the person giving the testimonial.',
        options: {
          hotspot: true, // Enables image hotspot for cropping
        },
      },
    ],
    preview: {
      select: {
        name: 'name',
        yearsTraining: 'yearsTraining',
        media: 'photo',
      },
      prepare({ name, yearsTraining, media }) {
        return {
          title: name,
          subtitle: `${yearsTraining} years of training`,
          media,
        };
      },
    },
  };
  
  export default testimonials