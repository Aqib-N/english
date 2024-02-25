import { GraphQLClient, gql } from "graphql-request";
import { api_endpoint } from "@/app/constants/index";

const graphQLClient = new GraphQLClient(api_endpoint);

export const homePage = async () => {
  const query = gql`
    query MyQuery {
      homePages {
        sections {
          ... on HeroSection {
            id
            heading
            description
            bannerImages {
              heroImage {
                url
              }
            }
            sectionName
          }
          ... on ServiceSection {
            id
            serviceHeading
            serviceCards {
              ... on ServiceCard {
                id
                cardHeading
                cardAbout
                cardImage {
                  url
                }
                cardButton
              }
            }
            sectionName
          }
          ... on AboutSection {
            id
            aboutHeading
            aboutDescription
            aboutButton
            aboutImage {
              url
            }
            sectionName
          }
          ... on ClientSection {
            id
            clientHeading
            clientDescription
            clientCard {
              ... on ClientCard {
                id
                cardHeading
                cardDescription
                cardDate
                clientRating
                clientImage {
                  url
                }
              }
            }
            sectionName
          }
          ... on ContactSection {
            id
            contactHeading
            formHeading
            infoHeading
            infoDescription
            email
            phone
            address
            socialMediaHeading
            sectionName
            socialMedia {
              ... on Media {
                id
                iconName
                mediaLink
                socialMediaIcons {
                  url
                }
              }
            }
          }
          ... on Navbar {
            id
            webLogo {
              url
            }
            navLinks {
              pageLink
              pageName
            }
            phoneNumber
            email
            sectionName
          }
        }
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};
