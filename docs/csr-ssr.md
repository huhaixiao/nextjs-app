# CSR & SSR

|     Client-side Rendering      |       Server-side Rendering       |
| :----------------------------: | :-------------------------------: |
|         Large bundles          |          Smaller bundles          |
|       Resource intensive       |        Resource efficient         |
|             No SEO             |                SEO                |
|          Less secure           |       More secure(API Key)        |
| Extra round trip to the server | No Extra round trip to the server |
|     Render at request time     |       Render at build time        |

## Server component cannot

- Listen to browser events
- Access browser APIs
- Maintain state
- Use effects

## mix

|   Client    |                                Server                                |
| :---------: | :------------------------------------------------------------------: |
| `AddToCart` | `NavBar` `SideBar` `ProductList` `ProductCard` `Pagination` `Footer` |

# How ssr works

- client server make request to the nginx server
- by its request path or request header or something else
- nginx server redirects request to html file to ssr server
- nginx server redirects request to api server to api server
